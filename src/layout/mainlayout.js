import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import EmailSubscription from '../components/subscription/emailSubscription';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <EmailSubscription
        formAction='https://gmail.us21.list-manage.com/subscribe/post?u=2f93f71036b1905acf02e250a&amp;id=bf9eebe87b&amp;f_id=0046b2e1f0'
        formId='mc-embedded-subscribe-form'
        emailFieldName='EMAIL'
        firstNameFieldName='FNAME'
        lastNameFieldName='LNAME'
        successMessage='Thank you for subscribing!'
      />
      <Footer />
    </>
  );
}
