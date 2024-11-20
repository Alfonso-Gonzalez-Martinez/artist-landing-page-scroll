import { render, screen, fireEvent } from '@testing-library/react';
import Card from '../components/Card';

describe('Card component', () => {
  const mockProps = {
    title: 'Card Title',
    description: 'This is a description of the card.',
    imageSrc: 'https://via.placeholder.com/150',
    website: 'https://www.example.com'
  };

  it('renders the card with the correct props', () => {
    render(<Card {...mockProps} />);
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', mockProps.imageSrc);
    expect(screen.getByText(/See more/)).toBeInTheDocument();
  });

  it('renders the FontAwesome icon inside the link', () => {
    render(<Card {...mockProps} />);
    const link = screen.getByText(/See more/);
    const icon = link.querySelector('svg');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass("fa-arrow-right");
  });

  it('calls the correct website link when clicked', () => {
    render(<Card {...mockProps} />);
    const link = screen.getByText(/See more/);
    expect(link).toHaveAttribute('href', mockProps.website);
  });

  it('opens the link in a new tab', () => {
    render(<Card {...mockProps} />);
    const link = screen.getByText(/See more/);
    expect(link).toHaveAttribute('target', 'blank');
  });
});