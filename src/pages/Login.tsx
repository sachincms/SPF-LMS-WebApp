import React, { useState, type FormEvent } from 'react';
import { Container, Row, Col, Card, Form, Button, Tabs, Tab } from 'react-bootstrap';
import Logos from '../components/Logos';

interface LoginPageProps {
  onLoginSuccess: () => void;
}

const Login: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);

    // TODO: Remove this later
    const DEMO_EMAIL = "abc@catalysts.org"
    const DEMO_PASSWORD = "pass123";

    if (form.checkValidity()) {
      if (activeTab === 'login') {
        console.log('Logging in with:', { email, password });
        if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
          onLoginSuccess();
        } else {
          alert("Invalid credentials!");
        }

      } else {
        if (password !== confirmPassword) {
          alert('Passwords do not match!');
          return;
        }
        console.log('Registering with:', { email, password });
      }
    }
  };

  const [organizationName, setOrganizationName] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');

  return (
    <Container fluid className="vh-100 login-bg">
      <Row className="h-100">
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <Logos />
        </Col>

        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <Card className="shadow-lg p-6 login-card" style={{ maxWidth: "100rem" }}>
            <Card.Body>
              <Tabs
                activeKey={activeTab}
                onSelect={(k) => setActiveTab(k as 'login' | 'register')}
                id="login-register-tabs"
                className="mb-3"
              >
                <Tab eventKey="login" title="Login">
                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="loginEmail">
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="loginPassword">
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Password is required.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <div className="d-grid gap-2">
                      <Button variant="primary" type="submit" size="lg">
                        Login
                      </Button>
                    </div>
                  </Form>
                </Tab>

                <Tab eventKey="register" title="Register">
                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="registerFullName">
                          <Form.Control
                            type="text"
                            placeholder="Full Name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                            minLength={6}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="registerUsername">
                          <Form.Control
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            minLength={6}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="registerOrganization">
                          <Form.Control
                            type="text"
                            placeholder="Organization"
                            value={organizationName}
                            onChange={(e) => setOrganizationName(e.target.value)}
                            required
                            minLength={6}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="registerEmail">
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid email.
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="registerPassword">
                          <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            minLength={6}
                          />
                          <Form.Control.Feedback type="invalid">
                            Password must be at least 6 characters long.
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="confirmPassword">
                          <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please confirm your password.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>
                    <div className="d-grid gap-2">
                      <Button variant="outline-primary" type="submit" size="lg">
                        Register
                      </Button>
                    </div>
                  </Form>
                </Tab>
              </Tabs>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;