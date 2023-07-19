import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

const renderWithRouter = (ui) => render(ui, { wrapper: MemoryRouter });

export default renderWithRouter;
