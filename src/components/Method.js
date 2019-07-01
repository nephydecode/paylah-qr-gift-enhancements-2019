import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './Method.css';
import classnames from 'classnames';

// const methodStyle = {
//     offset: '3',
//     border: '5px solid red',
// }

class Method extends Component {
    state = {};
    render() {
        return (
            <div>
                <Container className={classnames('mb-3 pt-3 pb-3', 'method-item', 'highlighted')}>
                    <Row>
                        <Col
                            xs={3}
                            md={2}
                            className={'p-0 d-flex flex-column flex-nowrap justify-content-center align-content-center'}
                        >
                            <div
                                className={'d-flex flex-column justify-content-center method-app-icon'}
                                style={{ background: '#000' }}
                            >
                                <img src="assets/dbs-paylah.svg" className={''} />
                            </div>
                        </Col>
                        <Col xs={9} md={10}>
                            <Container>
                                <Row>
                                    <Col style={{ textAlign: 'left' }} className="text1">
                                        DBS PayLah!
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ textAlign: 'left' }} className="text2">
                                        Redeem your QR Gift with DBS PayLah! App.
                                    </Col>
                                </Row>
                                <Row>
                                    <Row className="button3 m-3 auto">
                                        <Col style={{ textAlign: 'left' }} className="text3 col-auto p-1">
                                            Download PayLah!
                                        </Col>
                                        <Col className="arrow col-auto p-1" style={{ lineHeight: 1.6 }}>
                                            &rarr;
                                        </Col>
                                    </Row>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Method;