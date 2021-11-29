import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { create, update } from '../noteApi';

const editAnddelete = (background) => {
  return {
    color: '#fff',
    background,
    marginTop: '2px',
    width: '40px',
    height: '30px',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: '2px',
    display: 'flex',
    justifyContent: 'center',
  }
}


const close = {
  position: 'absolute',
  top: '20px',
  right: '30px',
  fontSize: '24px',
  fontWeight: '400',
  color: '#333',
}



const NewNote = ({ setIsLoading, note, setNote, handleFetch }) => {
  const { title, body } = note;
  const history = useHistory();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await create({ title, body }); // create note
    if (res.success) {
      alert(res.message);
      await handleFetch();
      setIsLoading(false);
      history.push('/notes');
    }
  }


  return (
      <div style={{ background: '#fff', margin: '50px 0', padding: '50px', position: 'relative', }}>
        <Link to="/notes" className="close" style={close}>
          <i className="fas fa-times"></i>
        </Link>
        <div style={{ width: '700px', margin: 'auto'}}>
            <form onSubmit={handleSubmit}>
                {/*<div style={{
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}>
                    <select
                      style={{
                        padding: '5px',
                        fontSize: '16px',
                        width: '70%',
                        border: '1',
                      }}>
                      <option>Topic</option>
                      <option>Nigeria</option>
                      <option>Ghana</option>
                    </select>

                    <select
                      style={{
                        padding: '5px',
                        fontSize: '16px',
                        width: '30%',
                        border: '1',
                      }}>
                      <option>Private</option>
                      <option>Public</option>
                    </select>
                </div>*/}
                <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                  <input
                    onChange={(e) => setNote({...note, title: e.target.value})}
                    type="title"
                    value={ title }
                    name="title"
                    placeholder="Title"
                    style={{
                      padding: '5px',
                      fontSize: '16px',
                      width: '98%',
                      border: '1',
                    }}
                  />
                </div>
                <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                  <textarea
                    onChange={(e) => setNote({...note, body:e.target.value})}
                    value={ body }
                    name="body"
                    placeholder="Body"
                    style={{
                      padding: 5,
                      fontSize: 16,
                      width: '98%',
                      border: '1',
                      height: 200,
                    }}
                  />
                </div>
                <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                  <button type="submit" style={{ width: '100%', padding: '10px 0', border: '0' }}>Save</button>
                </div>
            </form>
        </div>
      </div>
  )
}


export default NewNote;
