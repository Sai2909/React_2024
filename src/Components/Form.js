import React, { useState } from 'react';
import { Button, Form, Container, Row, Col, Dropdown, type, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import info from '../../../public/images/info.svg';
import './model.scss'
import Select from 'react-select';
import { validate } from '../Components/Vali'
 
function Model(props) {
 
  const {
    show,
    setShow,
    acitonFunc,
    selectedForm,
    formData,
    setFormData,
    AllClassList,
    setSelectedClass,
    AllSubClassList,
    setSubSelectedClass } = props
 
  const [validationErrors, setValidationErrors] = useState({});
 
  const handleClose = () => {
    setShow(false)
    setFormData({
      class: 0,
      subClass: 0,
      glAcName: '',
      glAcNumber: '',
      parentGlAc: 0,
      date: '',
      description: '',
      status: true
    })
 
  }
 
  const handleSave = (e) => {
    acitonFunc(e)
    handleClose()
  }
 
  // const handleSaveAndNew = (e) => {
  //   acitonFunc(e)
  //   setFormData({
  //     class: 0,
  //     subClass: 0,
  //     glAcName: '',
  //     glAcNumber: '',
  //     parentGlAc: 0,
  //     date: '',
  //     description: '',
  //     status: true
  //   })
 
  // }
  const handleSaveAndNew = (e) => {
    acitonFunc(e)
    const data = [
      { name: 'classType', value: formData.class },
      { name: 'subClassType', value: formData.subClass },
      { name: 'glAcName', value: formData.glAcName },
      { name: 'parentGlAc', value: formData.parentGlAc },
      { name: 'glAcNumber', value: formData.glAcNumber },
    ];
    const errors = validate(data);
     setValidationErrors(errors);
    console.log('validationErrors:', errors);
    console.log('selectedValues:', formData);
 
 
    // if (Object.keys(errors).length === 0) {
 
    setFormData({
      class: 0,
      subClass: 0,
      glAcName: '',
      glAcNumber: '',
      parentGlAc: 0,
      date: '',
      description: '',
      status: true
    })
    // }
 
  }
 
  const handleSelectChange = (selectedOption) => {
    const fieldname = 'class';
    setSelectedClass(selectedOption.value) // for getting sub class list
    setFormData({ ...formData, class: selectedOption.value });
    setValidationErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[fieldname];
      return newErrors;
    });
  };
 
  const handleSubSelectChange = (selectedOption) => {
    const fieldname = 'subClass'
    setSubSelectedClass(selectedOption.value)
    setFormData({ ...formData, subClass: selectedOption.value });
    setValidationErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[fieldname];
      return newErrors;
    });
  }
 
  const handleInputChange = (event) => {
    let { name, value } = event.target
    value = name === 'status' ? !formData.status : value
    setFormData({ ...formData, [name]: value })
    setValidationErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[name];
      return newErrors;
    });
  }
 
  // const handleBlur = (event) => {
  //   const { name, value } = event.target;
 
  //   const errors = validate([{ name, value }]);
 
  //   setValidationErrors((prevErrors) => {
  //     const newErrors = { ...prevErrors };
  //     delete newErrors[name]; // Remove the error for the current field
  //     return newErrors;
  //   });
  // };
  const handleBlur = (event) => {
    const { name, value } = event.target;
    const errors = validate([{ name, value }]);
 
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errors[name],
    }));
  };
 
  const ShowGlAcForm = () => {
    return (
      <Container>
        <Row>
          <Form.Group className="mb-3">
            <Form.Label className='d-flex justify-content-between'><span>Class Type*</span> <span> {['bottom'].map((placement) => (<OverlayTrigger
              key={placement}
              placement={placement}
              overlay={
                <Tooltip id={`tooltip-${placement}`}>
                  <strong>Assets</strong>.
                  <p>Any long term investment or an asset that cannot be converted into cash easily like:</p>
                </Tooltip>
              }
            >
              <img src={info} alt='info' />
            </OverlayTrigger>
            ))}  </span>  </Form.Label>
 
 
            <Select
              aria-label="Default select example"
              name='class'
              value={AllClassList.find(option => option.value === formData.class) ? AllClassList.find(option => option.value === formData.class) : ''}
              onChange={handleSelectChange} onBlur={handleBlur}
              options={AllClassList}
              // defaultValue={AllClassList[0]};
              placeholder="Please select class type"
            />
 
            {validationErrors.class && <div className="error-message ">{validationErrors.class}</div>}
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3">
            <Form.Label className='d-flex justify-content-between'><span>Sub-Class Type*</span> <span> {['bottom'].map((placement) => (<OverlayTrigger
              key={placement}
              placement={placement}
              overlay={
                <Tooltip id={`tooltip-${placement}`}>
                  <strong>Assets</strong>.
                  <p>Any long term investment or an asset that cannot be converted into cash easily like:</p>
                </Tooltip>
              }
            >
              <img src={info} alt='info' />
            </OverlayTrigger>
            ))}  </span>
            </Form.Label>
            <Select
              aria-label="Default select example"
              name='subClass'
              value={AllSubClassList.find(option => option.value === formData.subClass) ? AllSubClassList.find(option => option.value === formData.subClass) : ''}
              onChange={handleSubSelectChange} onBlur={handleBlur}
              options={AllSubClassList}
              // defaultValue={AllClassList[0]};
             
           
              placeholder="Please select sub-class type"
            />
            {validationErrors.subClass && <div className="error-message ">{validationErrors.subClass}</div>}
          </Form.Group>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label className='d-flex justify-content-between'>
                <span>GL A/C Name*</span>
                <span>
                  <Form.Check inline label="Make this as Sub - account" name="group1" type={type} /></span>
 
              </Form.Label>
              <Form.Control type="text" placeholder="Enter GL A/C Name" name='glAcName' value={formData.glAcName} onChange={handleInputChange} onBlur={handleBlur} />
              {validationErrors.glAcName && <div className="error-message ">{validationErrors.glAcName}</div>}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Form.Group className="mb-3">
            <Form.Label className='d-flex justify-content-between'><span>Parent GL Account*</span> <span> {['bottom'].map((placement) => (<OverlayTrigger
              key={placement}
              placement={placement}
              overlay={
                <Tooltip id={`tooltip-${placement}`}>
                  <strong>Assets</strong>.
                  <p>Any long term investment or an asset that cannot be converted into cash easily like:</p>
                </Tooltip>
              }
            >
              <img src={info} alt='info' />
            </OverlayTrigger>
            ))}  </span>
 
 
            </Form.Label>
            <Form.Select aria-label="Default select example" name='parentGlAc' value={formData.parentGlAc} onChange={handleInputChange} onBlur={handleBlur}>
              <option>Select an Account </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            {validationErrors.parentGlAc && <div className="error-message ">{validationErrors.parentGlAc}</div>}
          </Form.Group>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label className='d-flex justify-content-between'><span>GL A/C Number*</span> <span> {['bottom'].map((placement) => (<OverlayTrigger
                key={placement}
                placement={placement}
                overlay={
                  <Tooltip id={`tooltip-${placement}`}>
                    <strong>Assets</strong>.
                    <p>Any long term investment or an asset that cannot be converted into cash easily like:</p>
                  </Tooltip>
                }
              >
                <img src={info} alt='info' />
              </OverlayTrigger>
              ))}  </span>
              </Form.Label>
              <Form.Control type="Number" placeholder="Enter GL A/C Number" name='glAcNumber' value={formData.glAcNumber} onChange={handleInputChange} onBlur={handleBlur} />
              {validationErrors.glAcNumber && <div className="error-message ">{validationErrors.glAcNumber}</div>}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" placeholder="Date" name='date' value={formData.date} onChange={handleInputChange} />
 
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <textarea className="form-control" id="#" rows="5" name='description' value={formData.description} onChange={handleInputChange} />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3">
            <Form.Label>Active/Inactive</Form.Label>
            <Form.Check type="switch" id="custom-switch" name='status' checked={formData.status} onChange={handleInputChange} />
          </Form.Group>
        </Row>
      </Container>
    )
  }
  console.log("Model form data", formData)
  return (
    <Offcanvas show={show} onHide={handleClose} {...props} backdrop="static" className="glcreate-form">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Create GL Accounts</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Form>
          {selectedForm === 'New GL Account' && ShowGlAcForm()}
        </Form>
      </Offcanvas.Body>
      <div className='d-flex justify-content-end gap-3 offcanvas-footer'>
        <Button variant="secondary" className="cancel-btn" onClick={handleClose}>
          Cancel
        </Button>
        <Dropdown className='custom-dropdown'>
          <Dropdown.Toggle id="Save-clone">
            Save
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" onClick={handleSaveAndNew}>Save & New</Dropdown.Item>
            <Dropdown.Item href="#/action-2" onClick={handleSave}>Save & Close</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Offcanvas>
  )
}
 
export default Model;