import React, { useState, useEffect } from 'react';
import axios from 'axios';


const TeachersTable = () => {
  const [teachers, setTeachers] = useState([]);
  const [editingTeacherId, setEditingTeacherId] = useState(null);
  const [editedTeacher, setEditedTeacher] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://6507df0356db83a34d9b6474.mockapi.io/teachers');
      setTeachers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (teacher) => {
    setEditingTeacherId(teacher.id);
    setEditedTeacher(teacher);
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `https://6507df0356db83a34d9b6474.mockapi.io/teachers/${editedTeacher.id}`,
        editedTeacher
      );
      fetchData();
      cancelEditing();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://6507df0356db83a34d9b6474.mockapi.io/teachers/${id}`);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const cancelEditing = () => {
    setEditingTeacherId(null);
    setEditedTeacher({});
  };

  const handleInputChange = (event, key) => {
    setEditedTeacher({ ...editedTeacher, [key]: event.target.value });
  };

  const renderTable = () => {
    if (teachers.length === 0) {
      return <tr><td colSpan={4}>O`qtuvchilar yo`q</td></tr>;
    }

    return teachers.map((teacher) => (
      <tr key={teacher.id}>
        <td>{teacher.id}</td>
        <td>
          {editingTeacherId === teacher.id ? (
            <input
              value={editedTeacher.name}
              onChange={(e) => handleInputChange(e, 'name')}
              className="input"
            />
          ) : (
            teacher.name
          )}
        </td>
        <td>
          {editingTeacherId === teacher.id ? (
            <input
              value={editedTeacher.subject}
              onChange={(e) => handleInputChange(e, 'subject')}
              className="input"
            />
          ) : (
            teacher.subject
          )}
        </td>
        <td>
          {editingTeacherId === teacher.id ? (
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
              <button onClick={() => handleEdit(teacher)} className="action-button">
                Edit
              </button>
              <button onClick={() => handleDelete(teacher.id)} className="delente-button">
                Delete
              </button>
            </>
          )}
        </td>
      </tr>
    ));
  };

  return (
    <div>
      <div className="table-container" >
        <h1 className="heading">Teachers Table</h1>
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
    </div>
  );
};

export default TeachersTable;
