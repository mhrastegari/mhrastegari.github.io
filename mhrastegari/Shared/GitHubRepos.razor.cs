using Octokit;

namespace mhrastegari.Shared;

    public partial class GitHubRepos
    {
        public List<Repository>? Repos = new List<Repository>();
        public string MHGitHub { get; set; } = "mhrastegari";

	protected override async Task OnInitializedAsync()
	{
		await GetGitHubRepos(MHGitHub);
	}

	public async Task GetGitHubRepos(string name)
	{
		var github = new GitHubClient(new ProductHeaderValue("MHRastegari"));
		var repositories = await github.Repository.GetAllForUser(name);
		Repos = repositories.OrderByDescending(r => r.StargazersCount).Where(r => r.Name != MHGitHub && r.Name != $"{MHGitHub}.github.io").ToList();
	}
}