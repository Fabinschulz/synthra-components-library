import { GridColDef } from '@mui/x-data-grid';

export const columnsMock: GridColDef[] = [
  {
    field: 'firstName',
    headerName: '2',
    width: 150,
    editable: false
  },
  {
    field: 'lastName',
    headerName: '3',
    width: 150,
    editable: false
  },
  {
    field: 'age',
    headerName: '4',
    type: 'number',
    width: 110,
    editable: false
  },
  {
    field: 'fullName',
    headerName: '5',
    sortable: false,
    width: 160,
    editable: false
  },
  {
    field: 'email',
    headerName: '6',
    width: 200,
    editable: false
  },
  {
    field: 'phone',
    headerName: '7',
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
  }
];
