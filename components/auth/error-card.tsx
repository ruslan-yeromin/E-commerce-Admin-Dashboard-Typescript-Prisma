import CardWrapper from "@/components/auth/card-wrapper";


const ErrorCard = () => {
  return (
    <CardWrapper
        headerLabel="Something went wrong!"
        backButtonHref="/auth/login"
        backButtonLabel="Back to login"
    >
        <p></p>
    </CardWrapper>
  )
}

export default ErrorCard