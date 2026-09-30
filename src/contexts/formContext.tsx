'use client';
import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import {
  FieldErrors,
  FieldErrorsImpl,
  FieldValues,
  FormState,
  Resolver,
  useForm,
  UseFormSetValue,
  useFormState,
  UseFormWatch
} from 'react-hook-form';
import { getObjectPropertyValue } from '@/utils';

export type FormMode = 'create' | 'update';

type FormContextProps = {
  onSubmit: (values: any) => void;
  onError: (values: FieldErrors) => void;
  setValue: ReturnType<typeof useForm>['setValue'];
  reset: ReturnType<typeof useForm>['reset'];
  getValues: ReturnType<typeof useForm>['getValues'];
  formState?: FormState<any>;
  validationErrors: Partial<FieldErrorsImpl<any>> | undefined;
  control?: ReturnType<typeof useForm>['control'];
  watch: ReturnType<typeof useForm>['watch'];
  submitting: boolean;
  isDirty: boolean;
  isValid: boolean;
  dirtyFields: Partial<Record<string, unknown>>;
  readOnly?: boolean;
  trigger: ReturnType<typeof useForm>['trigger'];
  register: ReturnType<typeof useForm>['register'];
};

const notInitialized = () => {
  throw new Error('useFormContext deve ser usado dentro de um <FormProvider>.');
};

const FormContext = createContext<FormContextProps>({
  readOnly: false,
  onSubmit: () => true,
  onError: () => true,
  setValue: notInitialized,
  reset: notInitialized,
  watch: notInitialized as any,
  control: undefined,
  formState: undefined,
  getValues: notInitialized as any,
  validationErrors: undefined,
  submitting: false,
  isDirty: false,
  isValid: false,
  dirtyFields: {},
  trigger: notInitialized as any,
  register: notInitialized as any
});

export interface FormProviderProps<TValues extends FieldValues = FieldValues> {
  children: React.ReactNode;

  /**
   * Resolver de validação do react-hook-form (yup, zod, valibot...).
   * @example resolver={zodResolver(schema)}
   */
  resolver?: Resolver<TValues>;
  defaultValues?: any;
  onSubmit: (values: TValues) => unknown | Promise<unknown>;
  onError?: (error: unknown) => void;
  onChangeField?: ChangeFieldDelegate[];
  readOnly?: boolean;
}

export interface ChangeFieldDelegate {
  fieldName: string;
  delegate: (
    fieldValue: any,
    setValue: UseFormSetValue<any>,
    watch?: UseFormWatch<FieldValues>
  ) => void;
}

export const FormProvider = <TValues extends FieldValues = FieldValues>({
  children,
  resolver,
  defaultValues,
  onSubmit,
  onError,
  readOnly = false,
  onChangeField
}: FormProviderProps<TValues>) => {
  const [submitting, setSubmitting] = useState(false);
  const wasSubmitting = useRef(false);

  const {
    handleSubmit,
    setValue,
    getValues,
    control,
    reset,
    formState,
    watch,
    trigger,
    register,
    formState: { isDirty, isValid, dirtyFields }
  } = useForm<FieldValues>({
    resolver: resolver as Resolver<FieldValues> | undefined,
    defaultValues
  });

  useEffect(() => {
    if (wasSubmitting.current && !submitting) {
      reset(getValues());
    }
    wasSubmitting.current = submitting;
  }, [reset, getValues, submitting]);

  const { errors } = useFormState({ control });
  const validationErrors = Object.keys(errors ?? {}).length ? errors : undefined;

  const formSubmit = async (values: FieldValues) => {
    setSubmitting(true);
    try {
      return await onSubmit(values as TValues);
    } catch (error) {
      onError?.(error);
    } finally {
      setSubmitting(false);
    }
  };

  const htmlSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    return handleSubmit(formSubmit, onError)(event);
  };

  return (
    <FormContext.Provider
      value={{
        readOnly,
        onSubmit: onSubmit as FormContextProps['onSubmit'],
        onError: onError ?? (() => undefined),
        setValue,
        control,
        reset,
        formState,
        getValues,
        validationErrors,
        watch,
        submitting,
        isDirty,
        isValid,
        dirtyFields,
        trigger,
        register
      }}
    >
      <ChangeFieldHandlers handlers={onChangeField}>
        <form className="formContext" onSubmit={htmlSubmit} noValidate>
          {children}
        </form>
      </ChangeFieldHandlers>
    </FormContext.Provider>
  );
};

interface ChangeFieldHandlersProps {
  handlers: ChangeFieldDelegate[] | undefined;
  children: React.ReactNode;
}

const ChangeFieldHandlers = ({ handlers, children }: ChangeFieldHandlersProps) => {
  if (!handlers?.length) return <>{children}</>;

  return handlers.reduce<React.ReactNode>(
    (currentElement, handler) => (
      <ChangeFieldHandler key={handler.fieldName} handler={handler}>
        {currentElement}
      </ChangeFieldHandler>
    ),
    children
  ) as React.JSX.Element;
};

interface ChangeFieldHandlerProps {
  handler: ChangeFieldDelegate;
  children: React.ReactNode;
}

const ChangeFieldHandler = ({ handler, children }: ChangeFieldHandlerProps) => {
  const { watch, setValue, dirtyFields } = useFormContext();
  const currentValue = watch(handler.fieldName);
  const isDirtyField = !!getObjectPropertyValue(handler.fieldName, dirtyFields);

  useEffect(() => {
    if (isDirtyField) {
      handler.delegate(currentValue, setValue, watch);
    }
  }, [currentValue, isDirtyField]);

  return <>{children}</>;
};

export function useFormContext() {
  return useContext(FormContext);
}
