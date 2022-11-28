import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import KalkulatorContent from '../components/KalkulatorContent';
import KalkulatorResult from '../components/KalkulatorResult';
import Vector2 from '../assets/Vector 2.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import KalkulatorForm from '../components/KalkulatorForm';

const KalkulatorPage = () => {
  const [date, newDate] = useState(new Date());
  return (
    <>
      <Container>
        <Row className='kalkulator-page'>
          <Col>
            <p>Pilih Tanggal Terakhir Menstruasi</p>
            <Calendar onChange={newDate} value={date} className='calendar' />
            <KalkulatorResult date={date} />
          </Col>
          <Col>
            <KalkulatorContent />
            <img src={Vector2} alt='Vector Mom' className='kalkulator-page__vector-2' />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default KalkulatorPage;
