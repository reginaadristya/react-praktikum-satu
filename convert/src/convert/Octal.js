import React, { Component } from "react";

class Octal extends Component {
    constructor() {
        super();
        this.state = {
            octal: 0,
            option: "",
            result: 0
        }
    }

    convert = () => {
        const octal = this.state.octal
        const decimal = parseInt(octal, 8)
        if (this.state.option === "decimal") {
            return this.setState({
                result: decimal
            })
        } else if (this.state.option === "biner") {
            return this.setState({
                result: decimal.toString(2)
            })
        } else if (this.state.option === "hexadecimal") {
            return this.setState({
                result: decimal.toString(16)
            })
        }
    }

    changeOctal = (event) => {
        this.setState({
            octal: event.target.value
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
                        <h3>Konversi Bilangan Octal</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Octal</label>
                            <input type="number" className="form-control" onChange={this.changeOctal}></input>
                        </div>
                        <div className="form-group" onChange={this.changeOption}>
                            <label>Pilihan Konversi</label>
                            <select className="form-control">
                                <option value="decimal">Decimal</option>
                                <option value="biner">Biner</option>
                                <option value="hexadecimal">Hexadecimal</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-success form-control" onClick={this.convert}>Convert</button>
                        </div>
                        <h5 className="p-3 form-control text-center">{this.state.result}</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default Octal;