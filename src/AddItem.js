import React from "react";
import Navbar from "./components/Navbar";
import { withRouter } from 'react-router-dom';


class AddItem extends React.Component {

    constructor() {
        super()
        this.state = {
            id: 0,
            description: '',
            quantity: 0,
            image: '',
            uploadedFile: null,
            errorMessage: '',
            
        }
        this.items = {
                name: "hi",
                quantity: 0,
                description: "",
                url_image: "",
            
        }
    }


    handleFileSelect = (e) => {
        this.setState({uploadedFile: e.target.files[0]});
    }

    postItem(){
        //let itemChar = this.items.name
        //console.log(this.itemF);
        console.log(JSON.stringify(this.itemF))
       /*  axios.post('http://127.0.0.1:5000/api/postItem', article)
        .then(response => this.setState({ articleId: response.data.id }))
        .catch(error => {
            this.setState({ errorMessage: error.message });
            console.error('There was an error!', error);
        }); */
    }

    redirectToHome = () => {
        const { history } = this.props;
        if (history) history.push('/home');
    }

    render() {
        
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row g-3" style={{ paddingTop: "20px" }}>
                        <div className="col-md-8">
                            <h1>Add New Item</h1>
                        </div>

                        <div className="text-center">
                            <div className="mb-4">
                                <div className="input-group">
                                    <input className="form-control" placeholder="Enter name" 
                                    onChange={(e)=>{
                                        const name = { ...this.items, name: e.target.value };
                                        this.setState({name})}} 
                                        type="text" required />
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="input-group">
                                    <textarea placeholder="Enter a description" onChange={null} className="form-control" rows={5}></textarea>
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="centerWidget" id="numberInput">
                                    Quantity: <input placeholder="1" type="number" onChange={null} min="1" max="9999" required />
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="centerWidget" id="fileInput">
                                    Image: <input placeholder="Image" type="file" onChange={this.handleFileSelect} required />
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-md-3 align-self-center">
                            <div className="mb-4">
                                <div className="input-group">
                                    <input className="form-control" placeholder="Enter name" type="text" required />
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="input-group">
                                    <textarea placeholder="Enter a description" className="form-control"></textarea>
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="input-group">
                                    <input className="form-control" placeholder="Image" type="file" required />
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className="text-center">
                    <button
                        className="btn btn-warning btn-lg"
                        type="button"
                        onClick={this.postItem}>
                        Add
                    </button>
                </div>
            </div>
        )
    }
}

export default withRouter(AddItem);