import React, {useState} from 'react'
import { Button, Header, Image, Modal, Form, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function ProductForm() {
  const [open, setOpen] = React.useState(false)
  const [options, setOptions] = React.useState([
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ])
  const [value, setValue] = useState('sm')
  const [data, setData] = useState({title:'',sizes:[], description:''})

  const handleSubmit = () => {
    console.log(data)
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Link to='' className='ui item'><i className='icon plus'></i></Link>}
    >
      <Modal.Header>Add Product</Modal.Header>
      <Modal.Content image>
        {/* <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped /> */}
        <Modal.Description>
        <Form onSubmit={() => handleSubmit()}>
            <label>Title</label>
            <Form.Input fluid placeholder='title' name='name' onChange={e => setData({...data, title: e.target.value})} />
            <label>Sizes</label>
            <Dropdown 
              value={data.sizes}
              onChange={(e, {value}) => setData({...data, sizes: value})}
              placeholder='Sizes'
              fluid
              multiple
              search
              selection
              options={options}
            />
            <br />
            <label>Colors</label>
            <Dropdown
              placeholder='Colors'
              fluid
              multiple
              search
              selection
              options={options}
            />
            <br />
            <label>Categories</label>
            <Dropdown
              placeholder='Categories'
              fluid
              multiple
              search
              selection
              options={options}
            />
            <br />
            <label>Description</label>
          <Form.TextArea 
            value={data.description}
            onChange={e => setData({...data, description: e.target.value})}
            placeholder='Tell us more about you...' 
          />
        <Form.Button>Submit</Form.Button>
      </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}

export default ProductForm
