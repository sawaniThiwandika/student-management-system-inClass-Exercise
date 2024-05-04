export class StudentModel{

    constructor(id,f_name,l_name,address,program) {

        this._f_name = f_name;
        this._l_name = l_name;
        this._address = address;
        this._program = program;
        this._id = id;
    }
    set id(id) {
        this._id = id;
    }

    set f_name(f_name) {
        this._f_name = f_name;
    }

    set l_name(l_name) {
        this._l_name = l_name;
    }

    set address(address) {
        this._address = address;
    }

    set program(program) {
        this._program = program;
    }

    get id() {
        return this._id;
    }

    get f_name() {
        return this._f_name;
    }

    get l_name() {
        return this._l_name;
    }

    get address() {
        return this._address;
    }

    get program() {
        return this._program;
    }
}