import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
	to: 'jbernalwrc@gmail.com', // Change to your recipient
	from: 'gina@whidbeyprismpt.com',
	subject: 'Test sending with sendgrid',
	text: 'test email that I hope works easily',
	html: '<strong>(html)test email that I hope works easily (html)</strong>'
};
sgMail
	.send(msg)
	.then(() => {
		console.log('Email sent');
	})
	.catch((error) => {
		console.error(error);
	});
