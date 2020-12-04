import React from 'react';
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import SliderTwo from "../components/SliderTwo";
import Footer from "../components/Footer";
import BrandsTwo from "d:/Docs/webSiminchik/SiminchikWeb/files/components/BrandsTwo"
import CourseCatTwo from "../components/CourseCatTwo";
import AboutOne from "../components/AboutOne";
import CourseTwo from "../components/CourseTwo";
import TeamOne from "../components/TeamOne";
import Pricing from "../components/Pricing";
import MeetingOne from "../components/MeetingOne";
import CallToActionTwo from "../components/CallToActionTwo";
import BlogThree from "../components/BlogThree";
//Revisar ubicación de auspiciadores
const HomePageTwo = () => {
    return (
        <Layout pageTitle="Siminchikkunarayku">
            <NavTwo />
            <SliderTwo />
            <CourseCatTwo />
            <AboutOne />
            <CourseTwo />
            <TeamOne />
            <Pricing />
            <MeetingOne />
            <CallToActionTwo />
            <BlogThree />
            <BrandsTwo />
            <Footer />
        </Layout>
    );
};

export default HomePageTwo;
