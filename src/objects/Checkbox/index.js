import React from 'react';
import './styles.css';

import Input from '../Input';
import Label from '../Label';

const Checkbox = ({ id = "", value = "", content = "" }) => (
    <>
        <Input className="input" id={id} value={value} type="checkbox" content={content} />
        <Label className="label" htmlFor={id} content={content} />
    </>
);

export default Checkbox;