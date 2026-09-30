import { GridColDef } from '@mui/x-data-grid';

export const columnsMock: GridColDef[] = [
  {
    field: 'firstName',
    headerName: 'Nome',
    width: 150,
    editable: false
  },
  {
    field: 'lastName',
    headerName: 'Sobrenome',
    width: 150,
    editable: false
  },
  {
    field: 'age',
    headerName: 'Idade',
    type: 'number',
    width: 110,
    editable: false
  },
  {
    field: 'fullName',
    headerName: 'Nome completo',
    sortable: false,
    width: 160,
    editable: false
  },
  {
    field: 'email',
    headerName: 'E-mail',
    width: 200,
    editable: false
  },
  {
    field: 'phone',
    headerName: 'Telefone',
    width: 200,
    editable: false
  }
];

export const rowsMock = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(11) 1234-5678'
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    age: 25,
    fullName: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '(11) 8765-4321'
  },
  {
    id: 3,
    firstName: 'Michael',
    lastName: 'Johnson',
    age: 35,
    fullName: 'Michael Johnson',
    email: 'michael.johnson@example.com',
    phone: '(21) 9999-0000'
  },
  {
    id: 4,
    firstName: 'Emma',
    lastName: 'Williams',
    age: 28,
    fullName: 'Emma Williams',
    email: 'williams@gmail.com',
    phone: '(21) 8888-1111'
  },
  {
    id: 5,
    firstName: 'Olivia',
    lastName: 'Brown',
    age: 40,
    fullName: 'Olivia Brown',
    email: 'olivi@teste.com',
    phone: '(21) 7777-2222'
  },
  {
    id: 6,
    firstName: 'James',
    lastName: 'Jones',
    age: 45,
    fullName: 'James Jones',
    email: 'jame@rodrigures.co',
    phone: '(21) 6666-3333'
  },
  {
    id: 7,
    firstName: 'Sophia',
    lastName: 'Garcia',
    age: 50,
    fullName: 'Sophia Garcia',
    email: 'sophy@teste.co',
    phone: '(21) 5555-4444'
  }
];
