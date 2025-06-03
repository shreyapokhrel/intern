import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: [
    {
      id: 1,
      name: 'puzza phuyal',
      gender: 'Female',
      contact: '9823657283',
      email: 'puzza@gamil.com',
      permanentAddress: 'Kathmandu',
      temporaryAddress: 'Lalitpur',
      grade: 'A',
      
    },
    {
      id: 2,
      name: 'sukriti Ghimire',
      gender: 'Female',
      contact: '9846294746',
      email: 'sukriti@gmail.com',
      permanentAddress: 'Ithari',
      temporaryAddress: 'Kathmandu',
      grade: 'B+',
    
    },
    {
      id: 3,
      name: 'shreya Pokhrel',
      gender: 'Female',
      contact: '9845692873',
      email: 'shreya@gmail.com',
      permanentAddress: 'Jhapa',
      temporaryAddress: 'Kathmandu',
      grade: 'A-',
      
    },
  {
     id: 4,
      name: 'bob Sharma',
      gender: 'Male',
      contact: '9843738943',
      email: 'abc@gmail.com',
      permanentAddress: 'Pokhara',
      temporaryAddress: 'Baktapur',
      grade: 'A+',
    },
  ],
};

const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {},
});

export default studentSlice.reducer;
