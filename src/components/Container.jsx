import { useRef, useState } from "react";
import InputData from "./InputData";
import './AddNewUser.css';
import Modal from "./Modal";

const Container = () => {
    const EnterName = useRef();
    const EnterUserAge = useRef();
    const [userData, setUserData] = useState([]);
    const [search, setSearch] = useState('');
    const [isValid,setValid] = useState(false);
    const [errmsg,setErrmsg] = useState('');

    function SearchHandler(event) {
        setSearch(event.target.value);
    }
    function submitHandler(event) {
        event.preventDefault();
        if (EnterName.current.value === '') {
            setValid(true);
            setErrmsg('User data is not empty')
        }
        else if (EnterUserAge.current.value === '') {
            setValid(true);
            setErrmsg('age data is not empty')
        }
        else {
            if (+EnterUserAge.current.value < 0) {
                setValid(true);
                setErrmsg('age data is not Negative number')
            }
            else {
                const data = {
                    id: Math.random(),
                    name: EnterName.current.value,
                    age: EnterUserAge.current.value
                }
                setUserData([data, ...userData])
            }

        }

    }

    const deleteModalState = ()=>{
        setValid(false);
    }

    const filteredItems = userData.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase());
      //  return item.name.toLowerCase().slice(0, search.length) === search.toLowerCase();
    })

    console.log("rendered")
    return (
        <>
            {isValid && <Modal content={errmsg} deleteModal={deleteModalState}></Modal>}
            <div className="container p-3">
                <div className="row justify-content-center mb-5">
                    <div className="col-md-4">
                        <div className="inputGroup">
                            <form action="" onSubmit={submitHandler}>
                                <label className="mb-2">Search</label>
                                <input type="text" className="form-control mb-2" onChange={SearchHandler} placeholder='Search...'></input>
                                <label className="mb-2">User</label>
                                <input type="text"  className="form-control mb-2" ref={EnterName}></input>
                                <label className="mb-2">Age</label>
                                <input type="number"  className="form-control mb-3" ref={EnterUserAge} ></input>
                                <div className="button">
                                    <button type="submit" className="btn btn-primary">Add user</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {
                    filteredItems.map((dataItem) => {
                        return <InputData key={dataItem.id} data={dataItem}></InputData>
                    })
                }
            </div>
        </>
    )
}

export default Container;