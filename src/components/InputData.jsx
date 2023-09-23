import './InputData.css';
const InputData = (props) => {
    return (
        <div className="row justify-content-center">
            <div className="col-md-4">
                <div className="inputdata">
                    <p className="data">{props.data.name} ({props.data.age} years old)</p>
                </div>
            </div>
        </div>
    )
}

export default InputData;