import React, { Component } from "react";

class Heksa extends Component {
    constructor() {
        super();
        this.state = {
            hexadecimal: 0,
            option: "",
            result: 0
        }
    }

    convert = () => {
        const hexadecimal = this.state.hexadecimal
        const decimal = parseInt(hexadecimal, 16)
        if (this.state.option === "decimal") {
            return this.setState({
                result: decimal
            })
        } else if (this.state.option === "octal") {
            return this.setState({
                result: decimal.toString(8)
            })
        } else if (this.state.option === "biner") {
            return this.setState({
                result: decimal.toString(2)
            })
        }
    }

    changeBiner = (event) => {
        this.setState({
            hexadecimal: event.target.value
        })
    }

    changeOption = (event) => {
        this.setState({
            option: event.target.value
        })
    }

    render() {
        return (
            <div className="container col-md-6">
                <div className="card">
                    <div className="card-header bg-primary text-center text-white">
                        <h3>Konversi Bilangan Hexadecimal</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-group mb-3">
                            <label>Hexadecimal</label>
                            <input type="number" className="form-control" onChange={this.changeBiner}></input>
                        </div>
                        <div className="form-group mb-3" onChange={this.changeOption}>
                            <label>Pilihan Konversi</label>
                            <select className="form-control">
                                <option value="decimal">Decimal</option>
                                <option value="octal">Octal</option>
                                <option value="biner">Biner</option>
                            </select>
                        </div>
                        <div className="form-group mb-3">
                            <button className="btn btn-success form-control" onClick={this.convert}>Convert</button>
                        </div>
                        <h5 className="p-3 form-control text-center">{this.state.result}</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default Heksa;