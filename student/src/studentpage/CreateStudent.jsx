import React ,{useState} from "react";
import {useDispatch} from 'react-redux';
import {addStudent} from '../constants/studentSlice';
import {Button,TextInput,Select,Box} from '@mantine/core';

export default function CreateStudent(){
    const dispatch =useDispatch();

   const [name, setName] = useState('');
const [gender, setGender] = useState('');
const [contact, setContact] = useState('');
const [email, setEmail] = useState('');
const [permanentAddress, setPermanentAddress] = useState('');
const [temporaryAddress, setTemporaryAddress] = useState('');
const [grade, setGrade] = useState('');


  const handleCreate=()=>{
    if(!name||!gender){
        alert('please fill in name and gender at least!');
    }
    const newStudent={
       id: Date.now(),
        name,
        gender,
        email,
        contact,
        permanentAddress,
        temporaryAddress,
        grade,
    };
    dispatch(addStudent(newStudent));
    setName('');
    setGender('');
    setContact('');
    setEmail('');
    setPermanentAddress('');
    setTemporaryAddress('');
    setGrade('');

  };
  return(
    <Box maw={400} mx="auto" mt="md">
        <TextInput
        label="Name"
        placeholder="Enter student name"
        value={name}
        onChange={(e)=>setName(e.currentTarget.value)}
        required
         mb="sm"
    />
    <Select
    label="Gender"
    placeholder="SelectGender"
    data={['Male','Female','Other']}
    value={gender}
    onChange={setGender}
     required
        md="sm"
        />
        <TextInput
  label="Contact"
  placeholder="Phone number"
  value={contact}
  onChange={(e) => setContact(e.currentTarget.value)}
  mb="sm"
/>

        <TextInput
        label="Email"
        placeholder="Email address"
        value={email}
        onChange={(e)=>setEmail(e.currentTarget.value)}
        md="sm"
        />
        <TextInput
        label="Permanent Address"
        placeholder="Permanent address"
        value={permanentAddress}
        onChange={(e) => setPermanentAddress(e.currentTarget.value)}
        mb="sm"
      />

      <TextInput
        label="Temporary Address"
        placeholder="Temporary address"
        value={temporaryAddress}
        onChange={(e) => setTemporaryAddress(e.currentTarget.value)}
        mb="sm"
      />

      <TextInput
        label="Grade"
        placeholder="Grade (e.g. A+)"
        value={grade}
        onChange={(e) => setGrade(e.currentTarget.value)}
        mb="sm"
      />

      <Button fullWidth onClick={handleCreate}>
        Create Student
      </Button>
    </Box>
  );
}
  

