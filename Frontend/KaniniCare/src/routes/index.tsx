import { ReactNode } from 'react';
import Homepage from '../homepage';
import BookAppointment from '../bookAppointment';
import ContactUs from '../contactUs';
import DoctorDetails from '../doctorDetails';
import { routeName } from 'constant';
import Register from 'Register';
import RegisterDoctor from 'RegisterDoctor';
import RegisterAdmin from 'RegisterAdmin';
import RegisterPatient from 'RegisterPatient';
import SignUpDoctor from 'SignUpDoctor';
import SignUpPatient from 'SignUpPatient';
import SignUpAdmin from 'SignUpAdmin';
import SignUp from 'SignUp';
import DoctorID from "ADMIN/DoctorId";
import Delete from "ADMIN/Delete";
import Approve from "ADMIN/Approve";
import Update from "ADMIN/Update";
import Admin from 'ADMIN/Admin';
import Board from 'ADMIN/Board';

type IRoute = {
  pathName: string,
  component: JSX.Element | JSX.Element[] | ReactNode
}[]

export const routes: IRoute = [
  {
    pathName: routeName.HOMEPAGE,
    component: <Homepage />,
  },
  {
    pathName: routeName.BOOKAPPOINTMENT,
    component: <BookAppointment />,
  },
  {
    pathName: routeName.CONTACTUS,
    component: <ContactUs />,
  },

  {
    pathName: routeName.DOCTORDETAILS,
    component: <DoctorDetails />,
  },

  {
    pathName: routeName.SIGNUP,
    component: <SignUp />,
  },
  {
    pathName: routeName.REGISTER,
    component: <Register />,
  },  
  {
    pathName: routeName.REGISTERDOCTOR,
    component: <RegisterDoctor />,
  },  
  {
    pathName: routeName.REGISTERADMIN,
    component: <RegisterAdmin />,
  },  
  {
    pathName: routeName.REGISTERPATIENT,
    component: <RegisterPatient />,
  },
  {
    pathName: routeName.SIGNUPADMIN,
    component: <SignUpAdmin />,
  },  {
    pathName: routeName.SIGNUPPATIENT,
    component: <SignUpPatient />,
  },  {
    pathName: routeName.DOCTORID,
    component: <DoctorID />,
  },{
    pathName: routeName.DELETE,
    component: < Delete/>,
  },{
    pathName: routeName.APPROVE,
    component: <Approve />,
  },{
    pathName: routeName.UPDATE,
    component: <Update />,
  },{
    pathName: routeName.SIGNUPDOCTOR,
    component: <SignUpDoctor />,
  },{
    pathName: routeName.ADMIN,
    component: <Admin />,
  },{
    pathName: routeName.BOARD,
    component: <Board />,
  }
];