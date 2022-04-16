import React, { useEffect } from 'react';
import PageWrapper from '../shared/page-wrapper/page-wrapper.component';
import { Card } from '@mui/material';
import { getTemplatesStart, selectTemplates } from '../../redux/templates/templates.slice';
import { useDispatch, useSelector } from 'react-redux';
import TemplatePopupForm from './template-popup-form.component';

interface TemplatesProps {}

const Templates: React.FC<TemplatesProps> = () => {
  let templates = useSelector(selectTemplates);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!templates.length) {
      dispatch(getTemplatesStart());
    }
  }, [dispatch, templates.length]);

  return (
    <PageWrapper>
      <Card sx={{ marginBottom: '20px', padding: '10px' }}>
        <TemplatePopupForm label="Add new template" />
      </Card >
      <Card sx={{ marginBottom: '20px', padding: '10px' }}>List of templates {JSON.stringify(templates)}</Card>
    </PageWrapper>
  );
};

export default Templates;
