<script lang="ts">
	import { faGitlab } from '@fortawesome/free-brands-svg-icons';
	import Icon from './lib/Icon.svelte';
</script>

<footer class="mt-8 mb-2 flex flex-row flex-wrap items-center rounded-lg bg-gray-700 shadow-sm">
	<div class="mx-auto w-full max-w-7xl p-4 md:flex md:items-center md:justify-between">
		<div class="text-sm text-gray-200 sm:text-center">
			© 2023 <a href="https://astraljaeger.dev/?q=footer" class="hover:underline">AstralJaeger™</a>.
		</div>
		<div class="mt-3 text-sm text-gray-200 sm:mt-0">
			<a href="https://gitlab.com/ajxhome/web/link" class="hover:underline">
				<Icon icon={faGitlab} /> GitLab
			</a>
		</div>
	</div>
</footer>
