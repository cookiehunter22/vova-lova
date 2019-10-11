const keystone = require('keystone');
const Enquiry = keystone.list('Enquiry');
const mailgun = require('mailgun-js');
const mg = mailgun({ apiKey: process.env.MAILGUN_PRIVATE_API_KEY, domain: process.env.MAILGUN_SANDBOX_URL });

const SEND_TO_EMAIL = 'info@nr-fund.ru';
const SEND_FROM_EMAIL = 'info@nr-fund.ru';

const sendEmail = (data) => {
	mg.messages().send({
		from: `Сайт Фонда ${SEND_FROM_EMAIL}`,
		to: SEND_TO_EMAIL,
		subject: 'Сайт Форма Обратной Связи',
		text: `
			Имя: ${data.name}
			Email: ${data.email}
			Текст: ${data.text}
		`,
	}, (err, result) => {
		if (err) {
			console.error('🤕 Mailgun email failed with error:\n', err);
		} else {
			console.log('📬 Successfully sent Mailgun test with result:\n', result);
		}
	});
};

exports = module.exports = async function(req, res) {
	const newEnquiry = new Enquiry.model(req.body);
	newEnquiry.save();
	await sendEmail(req.body);
	res.status(200).send();
};
