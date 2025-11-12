import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';
import { Contact } from '../Contact';

describe('Contact Component', () => {
  const mockFormData = {
    name: '',
    email: '',
    message: ''
  };

  const mockOnSubmit = vi.fn();
  const mockOnFormDataChange = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders contact form with all fields', () => {
    render(
      <Contact
        formData={mockFormData}
        formStatus="idle"
        formError=""
        onSubmit={mockOnSubmit}
        onFormDataChange={mockOnFormDataChange}
      />
    );

    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/your email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/your message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('shows loading state while submitting', () => {
    render(
      <Contact
        formData={mockFormData}
        formStatus="loading"
        formError=""
        onSubmit={mockOnSubmit}
        onFormDataChange={mockOnFormDataChange}
      />
    );

    const submitButton = screen.getByRole('button', { name: /sending/i });
    expect(submitButton).toBeDisabled();
    expect(submitButton).toHaveTextContent('Sending...');
  });

  it('shows success message on successful submission', () => {
    render(
      <Contact
        formData={mockFormData}
        formStatus="success"
        formError=""
        onSubmit={mockOnSubmit}
        onFormDataChange={mockOnFormDataChange}
      />
    );

    expect(screen.getByText(/thank you for reaching out/i)).toBeInTheDocument();
  });

  it('shows error message on submission failure', () => {
    const errorMsg = 'Failed to send message. Please try again.';
    render(
      <Contact
        formData={mockFormData}
        formStatus="error"
        formError={errorMsg}
        onSubmit={mockOnSubmit}
        onFormDataChange={mockOnFormDataChange}
      />
    );

    expect(screen.getByText(errorMsg)).toBeInTheDocument();
  });

  it('disables inputs while loading', () => {
    render(
      <Contact
        formData={mockFormData}
        formStatus="loading"
        formError=""
        onSubmit={mockOnSubmit}
        onFormDataChange={mockOnFormDataChange}
      />
    );

    expect(screen.getByLabelText(/your name/i)).toBeDisabled();
    expect(screen.getByLabelText(/your email/i)).toBeDisabled();
    expect(screen.getByLabelText(/your message/i)).toBeDisabled();
  });

  it('calls onFormDataChange when input value changes', async () => {
    const user = userEvent.setup();
    render(
      <Contact
        formData={mockFormData}
        formStatus="idle"
        formError=""
        onSubmit={mockOnSubmit}
        onFormDataChange={mockOnFormDataChange}
      />
    );

    const nameInput = screen.getByLabelText(/your name/i);
    await user.type(nameInput, 'John Doe');

    expect(mockOnFormDataChange).toHaveBeenCalled();
  });

  it('calls onSubmit when form is submitted', async () => {
    const user = userEvent.setup();
    render(
      <Contact
        formData={{ name: 'John', email: 'john@example.com', message: 'Hello' }}
        formStatus="idle"
        formError=""
        onSubmit={mockOnSubmit}
        onFormDataChange={mockOnFormDataChange}
      />
    );

    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalled();
  });

  it('has proper accessibility labels on social links', () => {
    render(
      <Contact
        formData={mockFormData}
        formStatus="idle"
        formError=""
        onSubmit={mockOnSubmit}
        onFormDataChange={mockOnFormDataChange}
      />
    );

    expect(screen.getByLabelText(/visit linkedin profile/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/visit github profile/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/copy email address/i)).toBeInTheDocument();
  });

  it('copies email to clipboard when email button is clicked', async () => {
    const user = userEvent.setup();
    const clipboardWriteText = vi.fn();
    Object.assign(navigator, {
      clipboard: {
        writeText: clipboardWriteText
      }
    });

    render(
      <Contact
        formData={mockFormData}
        formStatus="idle"
        formError=""
        onSubmit={mockOnSubmit}
        onFormDataChange={mockOnFormDataChange}
      />
    );

    const emailButton = screen.getByLabelText(/copy email address/i);
    await user.click(emailButton);

    await waitFor(() => {
      expect(clipboardWriteText).toHaveBeenCalledWith('aparna@example.com');
    });
  });
});
