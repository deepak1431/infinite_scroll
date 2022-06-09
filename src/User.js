import React from "react";

import { Wrapper } from './User.Styles';

const User = ({ user }) => <Wrapper>{user.email}</Wrapper>

export default User;