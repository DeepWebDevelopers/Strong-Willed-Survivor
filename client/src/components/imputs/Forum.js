import React from "react";
// import { useState, useEffect } from "react";
// import Thanos from "../pages/thanos";

export default function Forum() {
	return (
		<div>
			<form
				name="contact-results"
				method="post"
				data-netlify="true"
				onSubmit="submit"
				data-netlify-honeypot="bot-field"
			>
				<input type="hidden" name="form-name" value="contact-results" />

				<div hidden>
					<input name="bot-field" />
				</div>

				<div>
					<label>
						First name
						<br />
						<input type="text" name="first-name" />
					</label>
				</div>

				<div>
					<label>
						Last name
						<br />
						<input type="text" name="last-name" />
					</label>
				</div>

				<div>
					<label htmlFor="email">Email</label>
					<br />
					<input id="email" type="email" name="email" />
				</div>

				<div>
					<label>
						Any Comments?
						<br />
						<textarea name="comments"></textarea>
					</label>
				</div>

				<button type="submit">Submit The Results</button>
			</form>
		</div>
	);
}
