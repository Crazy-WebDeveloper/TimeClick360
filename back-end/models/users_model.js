const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var date = new Date('1985-06-24');

const users = () =>{
    var  UserSchema = new Schema({
        id : { type : String, default : ""},
        first_name : { type : String, default : ""},
        last_name : { type : String, default : ""},
        email : { type : String, default : ""},
        telephone: { type: String, default: "" },
        password : { type: String, default: "" },
        birthday : { type: String, default: "" },
        position : { type: String, default: "" },
        department : { type: String, default: "" },
        role : { type: String, default: "" },
        responsable : { type: String, default: "" },
        centers : { type: String, default: "" },
        calendar : { type: String, default: "" },
        agreement : { type: String, default: "" },
        schedule : { type: String, default: "" },
        DNI : { type: String, default: "" },
        NSS : { type: String, default: "" },
        office : { type: String, default: "" },
        skills : { type: String, default: "" },
        start : { type: String, default: "" },
        end : { type: String, default: "" },
        verified : { type: Boolean, default: false },
        allowed : { type: Boolean, default: false },
    });
    return mongoose.model('users', UserSchema)
}

const companies = () => {
    var CompanySchema = new Schema({
        company_name: { type: String, default: "" },
        employee_number: { type: Number, default: 0 },
        email : { type : String, default : ""},
        telephone: { type: String, default: "" },
        direction: { type: String, default: "" },
        cp: { type: String, default: "" },
        city: { type: String, default: "" },
        country: { type: String, default: "" },
        cif: { type: String, default: "" },
        ccc: { type: String, default: "" },
        logo: { type: String, default: "" },
    })

    return mongoose.model('companies', CompanySchema)
}

module.exports  = {
    users : users(),
    companies: companies(),
}