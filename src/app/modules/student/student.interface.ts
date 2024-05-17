import { Schema, model, connect } from 'mongoose';


export type name = {
    firstName: string;
    middleName: string;
    lastName: string
}

export type guardien = {
    fatherName: string;
    fatherOcupation: string;
    fatherContactNo: string;
    motherName: string;
    motherOcupation: string;
    motherContactNo: string;
}

// 1. Create an interface representing a document in MongoDB.
export type Student = {
    id: string,
    name: name;
    gender: "male" | "female";
    dateOfBirth: "string",
    email: string;
    contactNo: string;
    emergencyContactNo: string;
    BloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
    presentAddress: string;
    permanentAddress: string
    guardian: guardien
  }