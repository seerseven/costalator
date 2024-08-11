import { defineConfig } from 'astro/config';
import github from '@astrojs/github';

// https://astro.build/config
export default defineConfig({
	integrations: [
		github({
			// Replace 'username' and 'repository' with your GitHub username and repository name
			deployTo: 'gh-pages', // Deploy to 'gh-pages' branch
			username: 'your-github-username',
			repository: 'your-repo-name',
		}),
	],
	// Other configurations...
});
