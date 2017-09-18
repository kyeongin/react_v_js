import React from 'react';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';

export default class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedKey: -1,
            keyword: "",
            contactData: [{
                name: "Abet",
                phone: "010-0001-0001"
            },{
                name: "betty",
                phone: "010-0010-0010"
            }]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick  = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            keyword: e.target.value
        });
    }
    handleClick(key){
        this.setState({
            selectedKey: key
        });

        console.log('selected');
    }
    render(){
        const mapToComponents = (data) => {
            data.sort();
            data = data.filter(
                (contact) => {
                    var keyword_s =this.state.keyword.toString().toLowerCase();
                    return contact.name.toString().toLowerCase().indexOf(keyword_s) > -1 ;
                }
            );
            return data.map((contact, i) => {
                return (<ContactInfo 
                                contact={contact} 
                                key={i} 
                                onClick={()=> this.handleClick(i)}
                                />);
            });
        };    


        return (
            <div>
                <h1>Contacts</h1>
                <input
                    name = "keyword"
                    placeholder = 'Serch'
                    onChange={()=> this.handleClick(i)}
                />


                <div>{mapToComponents(this.state.contactData)}</div>
                <ContactDetails
                    isSelected={this.state.selectedKey != -1}
                    contact = {this.state.contactData[this.state.selectedKey]}    
                    />
            </div>
        );
    }
}