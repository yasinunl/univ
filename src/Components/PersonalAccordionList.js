import React, { useContext, useEffect } from 'react'
import { Accordion, Button } from 'react-bootstrap'
import CourseTable from './PersonalCourseTable';
import { useLocation, useNavigate } from 'react-router-dom';
import { deleteData, updateData } from '../Service/CourseService';
import { AuthContext } from '../auth/auth';

export default function PersonalAccordionList() {
    const { isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    const sections = location.state.item.sections
    const handleAddClick = () =>{
        navigate("/personal/adding")
    }
    const handleUpdateClick = async (course)=>{
        const fetchUpdate = async (item)=>{
            const formData = await updateData(item);
            return formData;
        }
        const message = await fetchUpdate(course);
        if(message === "successful") alert('Kurs başarıyla güncellendi.');
        else alert('Kurs güncellenemedi.');
    }
    const handleDeleteClick = async (id) =>{
        const fetchDelete = async (item)=>{
            const formData = await deleteData(item);
            return formData;
        }
        const message = await fetchDelete(id);
        if(message === "successful") alert('Kurs başarıyla silindi.')
        else alert('Kurs silinemedi.');
    }
    useEffect(()=>{
        if(!isLoggedIn){
          navigate("/");
      }
      },[isLoggedIn, navigate]);
    return (
        <><Button className="mb-3 mt-3" onClick={handleAddClick}>Ekle</Button>
        <Accordion defaultActiveKey="0">
            {sections && sections.map((item, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>{item.number}</Accordion.Header>
                    <Accordion.Body><CourseTable
                        courses={item.courses}
                        onUpdate={(course) => handleUpdateClick(course)}
                        onDelete={(id) => handleDeleteClick(id)}
                    /></Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion></>
    )
}
