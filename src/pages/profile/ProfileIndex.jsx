import { Outlet } from "react-router-dom";
import ProfileTabs from "../../components/ProfileTabs";
import { Container, Form } from "react-bootstrap";
import { useContext } from "react";
import { FormContext } from "../../context/FormData";

const ProfileIndex = () => {
  // form context
  const { onSubmit, handleSubmit } = useContext(FormContext);

  return (
    <Container>
      <h4 className="mt-5">Update profile</h4>
      <ProfileTabs />

      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* dynamically load tabs  */}
        <Outlet></Outlet>

        {/* submit button  */}
        <input
          type="submit"
          className="btn btn-primary my-2"
          value="Update Profile"
        />
      </Form>
    </Container>
  );
};

export default ProfileIndex;
