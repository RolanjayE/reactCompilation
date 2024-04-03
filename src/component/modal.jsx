import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalCard({ id, name, job, propsupdateUserData }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [sname, setSname] = useState(name)
  const [sjob, setSjob] = useState(job)


  

  return (
    <>
    
      <button onClick={handleShow} className="py-1 my-2 px-8 border-purple-500 rounded-sm text-white bg-purple-900">Update</button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <form onSubmit={ (e) => {
                e.preventDefault()
                propsupdateUserData(id, sjob, sname)
            }} id='formModal' action="">
                <div className="flex items-center justify-between gap-4 py-2">
                    <p className="text-base text-gray-500">Name</p>
                    <input type="text" className='border-2 border-indigo-600 w-[80%] p-2'
                    value={sname}
                    onChange={ (e) => { setSname(e.target.value) }}
                    />
                </div>
                <div className="flex items-center justify-between gap-4 py-2">
                    <p className="text-base text-gray-500">Posistion</p>
                    <input type="text" className='border-2 border-indigo-600 w-[80%] p-2'
                    value={sjob}
                    onChange={ (e) => { setSjob(e.target.value) }}
                    />
                </div>
            </form>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <button 
          className="py-2 my-2 px-4 border-purple-500 rounded-lg text-white bg-purple-900"
          form='formModal'
          >UPDATE</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCard;