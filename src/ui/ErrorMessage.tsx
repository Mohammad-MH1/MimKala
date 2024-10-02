type ErrorMessageProps = {
  message: string;
};

function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className='flex h-dvh items-center justify-center'>
      <p className='rounded-md bg-blue-300 px-8 py-5 text-xl font-bold'>
        {message}
      </p>
    </div>
  );
}

export default ErrorMessage;
