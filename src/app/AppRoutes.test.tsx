import { MemoryRouter } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import AppRoutes from "./AppRoutes";

jest.mock('../pages/ContactPage', () => () => <div>Mock Contact Page</div>);

describe('AppRoutes', () => {
  it('renders ContactPage at path "/"', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>
    );

    expect(screen.getByText('Mock Contact Page')).toBeInTheDocument();
  });

  it('renders ContactPage at path "/contacts"', () => {
    render(
      <MemoryRouter initialEntries={['/contacts']}>
        <AppRoutes />
      </MemoryRouter>
    );

    expect(screen.getByText('Mock Contact Page')).toBeInTheDocument();
  });
});