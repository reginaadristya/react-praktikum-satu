import React, { Component } from "react";

class Decimal extends Component {
    constructor() {
        super();
        this.state = {
            decimal: 0,
            option: "biner",
            result: 0
        }
    }

    convert = () => {
        const decimal = +this.state.decimal
        if (this.state.option === "biner") {
            return this.setState({
                result: decimal.toString(2)
            })
        } else if (this.state.option === "octal") {
            return this.setState({
                result: decimal.toString(8)
            })
        } else if (this.state.option === "hexadecimal") {
            return this.setState({
                result: decimal.toString(16)
            })
        }
    }

    changeDecimal = (event) => {
        this.setState({
            decimal: event.target.value
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
                        <h3>Konversi Bilangan Desimal</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-group mb-3">
                            <label>Decimal</label>
                            <input type="number" className="form-control" onChange={this.changeDecimal}></input>
                        </div>
                        <div className="form-group mb-3" onChange={this.changeOption}>
                            <label>Pilihan Konversi</label>
                            <select className="form-control">
                                <option value="biner">Biner</option>
                                <option value="octal">Octal</option>
                                <option value="hexadecimal">Hexadecimal</option>
                            </select>
                        </div>
                        <div className="form-group mb-3">
                            <button className="btn btn-success text-white form-control" onClick={this.convert}>Convert</button>
                        </div>
                        <h5 className="p-3 form-control text-center">{this.state.result}</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default Decimal;