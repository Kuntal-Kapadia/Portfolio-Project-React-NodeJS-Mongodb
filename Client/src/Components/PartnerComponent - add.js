import React, {Component} from 'react';
import { Button, Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { render } from '../../../Server/app';



function PartnerList(props){

    const partners = props.partners.partners.map(partner => {
        return (
         
            <Media tag ="li">
                    <RenderPartner partner={partner} />
            </Media>
          
        );
        });

        if (props.partners.isLoading) {
            return (             
                <Loading />
            );
        }
        if (props.partners.errMess) {
            return (
                <div className="col">
                    <h4>{props.partners.errMess}</h4>
                </div>
            );
        } 
        return(
            <div className="col mt-4">
                <Media list>
                    {/* <Stagger in> */}
                        {partners}
                    {/* </Stagger> */}
                </Media>
            </div>
        )
}

function RenderPartner({partner}){

    if(partner){
        return(
            <React.Fragment>
                <Media tag="list">
                    <Media object src={baseUrl + partner.image} alt={partner.name}  width="150"/>
                    <Media>
                        <Media body className="ml-5 mb-4">
                            <Media heading>
                                {partner.name}
                            </Media>
                            {partner.description}
                            
                        </Media>
                    </Media>    
                </Media>
                <Button color = "info">DELETE</Button>
            </React.Fragment>
        );
    }
    else {
       return <div />;
    }

}

class Partners extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isModalOpen: false,
        };
        this.toggleModal = this.toggleModal.bind(this);
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleAddingPartner(event) {
        this.toggleModal();
        // this.props.postPartner({username: this.username.value, password: this.password.value});
        event.preventDefault();
    }
    render(){
        return (
            <React.Fragment>
            <div className="container">
                        
                <div className="row row-separator">
                <div className="col-12">
                    <h3>PARTNER MANAGEMENT</h3>
                    <div className="col-12 row-separator">
                    <Button color="success" onClick={this.toggleModal}>Add a Partner </Button>  
                    </div> 
                    
                </div>    
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col mt-4">
                            <PartnerList partners={this.props.partners}/>
                    </div>
                </div>
            </div>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader className="modalFormat" toggle={this.toggleModal}>Add Partner</ModalHeader>
            <ModalBody className="modalFormat">
                <Form onSubmit={this.handleAddingPartner}>
                    <FormGroup>
                        <Label htmlFor="name">Name</Label>
                        <Input type="text" id="name" name="name"
                            innerRef={input => this.name = input} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="image">Image</Label>
                        <Input type="text" id="image" name="image"
                            innerRef={input => this.image = input} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="description">Desrciption</Label>
                        <Input type="text" id="description" name="description"
                            innerRef={input => this.description = input} />
                    </FormGroup>
                    <Button className= "formbutton btn-large btn-block" type="submit" value="submit" color="primary">Add Partner</Button>
                        
                    </Form>
            </ModalBody>
        </Modal>
        </React.Fragment>
        );
    }
}
export default Partners;