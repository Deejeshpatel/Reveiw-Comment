import { useState } from "react"

const Comment = () => {

    const [input, setInput] = useState({
        comment: ''
    });

    const [comment, setComment] = useState([]);

    const handleInput = (e) => {

        let name = e.target.name;
        let value = e.target.value;
        setInput({ ...input, [name]: value });

    }

    const handleSubmit = (e) => {

        e.preventDefault();
        setComment([...comment, input]);
        setInput({
            comment: ''
        });

    }

    return (
        <>
            <div className="comment-box w-100 p-5">
                {comment.length > 0 ? comment.map((data) => {
                    return <div className="d-flex flex-wrap w-100">
                        
                        <div className="col-11 p-5">
                            <div className="comment-name ps-3">
                                <h4>Deejesh Patel</h4>
                            </div>
                            <div className="comment-cm ps-3">
                                <h6>&#8829; {data.comment}</h6>
                            </div>
                        </div>
                    </div>
                }) : <p className="text-danger p-4"></p>}
            </div>
            <div className="input-box p-3">
                <form className="col-12 d-flex flex-wrap justify-content-center align-items-center" onSubmit={(e) => handleSubmit(e)}>
                    
                    <input className="w-75 text-bg p-1" type="text" placeholder=" Enter Comments..." name="comment" value={input.comment} onChange={(e) => handleInput(e)} />
                    <button type="submit" className="ms-3 px-3 btn btn-primary bordered">Send</button>
                    <h4 className="mb-0 pe-3">&#9199;</h4>
                </form>
            </div>
        </>
    )

}

export default Comment