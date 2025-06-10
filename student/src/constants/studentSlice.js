import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [
    {
      id: 1,
      name: "puzza phuyal",
      gender: "Female",
      contact: "9823657283",
      email: "puzza@gamil.com",
      permanentAddress: "Kathmandu",
      temporaryAddress: "Lalitpur",
      grade: "A",
    },
    {
      id: 2,
      name: "sukriti Ghimire",
      gender: "Female",
      contact: "9846294746",
      email: "sukriti@gmail.com",
      permanentAddress: "Ithari",
      temporaryAddress: "Kathmandu",
      grade: "B+",
    },
    {
      id: 3,
      name: "shreya Pokhrel",
      gender: "Female",
      contact: "9845692873",
      email: "shreya@gmail.com",
      permanentAddress: "Jhapa",
      temporaryAddress: "Kathmandu",
      grade: "A-",
    },
    {
      id: 4,
      name: "bob Sharma",
      gender: "Male",
      contact: "9843738943",
      email: "abc@gmail.com",
      permanentAddress: "Pokhara",
      temporaryAddress: "Baktapur",
      grade: "A+",
    },
    {
      id: 5,
      name: "shreya Pokhrel",
      gender: "Female",
      contact: "9845692873",
      email: "shreya@gmail.com",
      permanentAddress: "Jhapa",
      temporaryAddress: "Kathmandu",
      grade: "A-",
    },
    {
      id: 6,
      name: "shreya Pokhrel",
      gender: "Female",
      contact: "9845692873",
      email: "shreya@gmail.com",
      permanentAddress: "Jhapa",
      temporaryAddress: "Kathmandu",
      grade: "A-",
    },
    {
      id: 7,
      name: "shreya Pokhrel",
      gender: "Female",
      contact: "9845692873",
      email: "shreya@gmail.com",
      permanentAddress: "Jhapa",
      temporaryAddress: "Kathmandu",
      grade: "A-",
    },
    {
      id: 8,
      name: "shreya Pokhrel",
      gender: "Female",
      contact: "9845692873",
      email: "shreya@gmail.com",
      permanentAddress: "Jhapa",
      temporaryAddress: "Kathmandu",
      grade: "A-",
    },
    {
      id: 9,
      name: "shreya Pokhrel",
      gender: "Female",
      contact: "9845692873",
      email: "shreya@gmail.com",
      permanentAddress: "Jhapa",
      temporaryAddress: "Kathmandu",
      grade: "A-",
    },
    {
      id: 10,
      name: "shreya Pokhrel",
      gender: "Female",
      contact: "9845692873",
      email: "shreya@gmail.com",
      permanentAddress: "Jhapa",
      temporaryAddress: "Kathmandu",
      grade: "A-",
    },
    {
      id: 11,
      name: "shreya Pokhrel",
      gender: "Female",
      contact: "9845692873",
      email: "shreya@gmail.com",
      permanentAddress: "Jhapa",
      temporaryAddress: "Kathmandu",
      grade: "A-",
    },
    {
      id: 12,
      name: "shreya Pokhrel",
      gender: "Female",
      contact: "9845692873",
      email: "shreya@gmail.com",
      permanentAddress: "Jhapa",
      temporaryAddress: "Kathmandu",
      grade: "A-",
    },
    {
      id: 13,
      name: "shreya Pokhrel",
      gender: "Female",
      contact: "9845692873",
      email: "shreya@gmail.com",
      permanentAddress: "Jhapa",
      temporaryAddress: "Kathmandu",
      grade: "A-",
    },
    {
      id: 14,
      name: "shreya Pokhrel",
      gender: "Female",
      contact: "9845692873",
      email: "shreya@gmail.com",
      permanentAddress: "Jhapa",
      temporaryAddress: "Kathmandu",
      grade: "A-",
    },
    {
      id: 15,
      name: "shreya Pokhrel",
      gender: "Female",
      contact: "9845692873",
      email: "shreya@gmail.com",
      permanentAddress: "Jhapa",
      temporaryAddress: "Kathmandu",
      grade: "A-",
    },
  ],
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
};

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    updateStudent(state, action) {
      const updatedStudent = action.payload;
      const index = state.students.findIndex(
        (indvStudent) => indvStudent.id === updatedStudent.id
      );
      if (index !== -1) {
        state.students[index] = updatedStudent;
      }
    },
    addStudent(state, action) {
       state.students.unshift(action.payload);
    },
     login(state) {
      state.isLoggedIn = true;
      localStorage.setItem("isLoggedIn", "true");
  },
   logout(state) {
      state.isLoggedIn = false;
      localStorage.removeItem("isLoggedIn");
   },
    },
});
export const { updateStudent, addStudent , login, logout} = studentSlice.actions;

export default studentSlice.reducer;
