import React, { useState, useEffect } from 'react';
import axios from 'axios';



const AcceptanceTable = () => {
    const [acceptanceData, setAcceptanceData] = useState([]);
    const [editingDataId, setEditingDataId] = useState(null);
    const [editedData, setEditedData] = useState({});

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://6507df0356db83a34d9b6474.mockapi.io/acceptance');
            setAcceptanceData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleEdit = (data) => {
        setEditingDataId(data.id);
        setEditedData(data);
    };

    const handleSave = async () => {
        try {
            await axios.put(
                `https://6507df0356db83a34d9b6474.mockapi.io/acceptance/${editedData.id}`,
                editedData
            );
            fetchData();
            cancelEditing();
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://6507df0356db83a34d9b6474.mockapi.io/acceptance/${id}`);
            fetchData();
        } catch (error) {
            console.error(error);
        }
    };

    const cancelEditing = () => {
        setEditingDataId(null);
        setEditedData({});
    };

    const handleInputChange = (event, key) => {
        setEditedData({ ...editedData, [key]: event.target.value });
    };

    const renderTable = () => {
        if (acceptanceData.length === 0) {
            return <tr><td colSpan={4}>Studentlar yo`q</td></tr>;
        }

        return acceptanceData.map((data) => (
            <tr key={data.id}>
                <td>{data.id}</td>
                <td>
                    {editingDataId === data.id ? (
                        <input
                            value={editedData.name}
                            onChange={(e) => handleInputChange(e, 'name')}
                            className="input"
                        />
                    ) : (
                        data.name
                    )}
                </td>
                <td>
                    {editingDataId === data.id ? (
                        <input
                            value={editedData.subject}
                            onChange={(e) => handleInputChange(e, 'subject')}
                            className="input"
                        />
                    ) : (
                        data.subject
                    )}
                </td>
                <td>
                    {editingDataId === data.id ? (
                        <>
                            <button onClick={handleSave} className="save-button">
                                Save
                            </button>
                            <button onClick={cancelEditing} className="action-button">
                                Cancel
                            </button>
                        </>
                    ) : (
                        <>
                            <button onClick={() => handleEdit(data)} className="action-button">
                                Edit
                            </button>
                           
                            <button onClick={() => handleDelete(data.id)} className="delente-button">
                                Delete
                            </button>
                        </>
                    )}
                </td>
            </tr>
        ));
    };

    return (
        <div className="table-container">
            <h1 className="heading">Students Table</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Ism</th>
                        <th>Familya</th>
                        <th>Harakatlar</th>
                    </tr>
                </thead>
                <tbody>{renderTable()}</tbody>
            </table>
        </div>
    );
};

export default AcceptanceTable;
