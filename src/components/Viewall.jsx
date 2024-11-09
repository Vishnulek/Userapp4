import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {
    const [usersData, changeUserData] = useState(
        []
    )
    const fetchData = () => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(
            (response) => {
                changeUserData(response.data)
            }
        ).catch()
    }
    useEffect(
        () => { fetchData() }, []
    )
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Phn no</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usersData.map(
                                    (value, index) => {
                                        return <tr>
                                            <th scope="row">{value.id}</th>
                                            <td>{value.name}</td>
                                            <td>{value.username}</td>
                                            <td>{value.website}</td>
                                            <td>{value.email}</td>
                                            <td>{value.phone}</td>
                                        </tr>
                                    }
                                )}

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewall
