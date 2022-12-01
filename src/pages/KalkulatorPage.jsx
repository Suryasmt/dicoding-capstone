import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import KalkulatorContent from '../components/KalkulatorContent';
import KalkulatorResult from '../components/KalkulatorResult';
import Calendar from 'react-calendar';
import '../style/components/_calendar.css';

const KalkulatorPage = () => {
  const [date, newDate] = useState(new Date());
  const [showResult, setShowResult] = useState(false);

  const onClick = () => setShowResult(true);

  return (
    <>
      <Container>
        <Row className='kalkulator-page'>
          <Col>
            <strong>
              <p>Pilih Tanggal Terakhir Menstruasi</p>
            </strong>
            <div className='my-3'>
              <Calendar onChange={newDate} value={date} onClickDay={onClick} maxDate={new Date()} />
              {showResult ? <KalkulatorResult date={date} /> : null}
            </div>
          </Col>
          <Col>
            <KalkulatorContent />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default KalkulatorPage;
