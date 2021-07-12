import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Form, Table, FormControl } from "react-bootstrap";
import { searchUniversity, updateUniversityList } from './universitiesActions';
import { initalhUniversityList } from '../../app/api';
import './universitiesStyles.scss';

function Universities() {
    
    const [searchValue, setSearchValue] = useState('');

    const universitiesList = useSelector(state => state.universities.universities);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateUniversityList(initalhUniversityList()));
    }, []);
    
    const fillTable = (university, index) => {
        return (
            <tr key={index}>
                <td>{university.name}</td>
                <td>{university.country}</td>
                <td><a href={university.web_pages}>Homepage</a></td>
                <td>{university.alpha_two_code}</td>
            </tr>
        )
    }

    const searchUniversities = (name) => {
        dispatch(searchUniversity(name));
        console.log(universitiesList);
    }

    return (
        <div className="universities">
            <Form className="search-bar">
                <FormControl type="text" placeholder="Search" value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
                <Button variant="primary" onClick={ _ => searchUniversities(searchValue) }>Search</Button>
            </Form>
            <div className="search-table scroll-area">
            <Table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Country</th>
                    <th>Web Page</th>
                    <th>Province</th>
                    </tr>
                </thead>
                <tbody>
                    {universitiesList.map(fillTable)}
                </tbody>
            </Table>
            </div>
        </div>
    )
}

export default Universities;