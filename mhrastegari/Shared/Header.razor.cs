using Microsoft.AspNetCore.Components.Routing;
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace mhrastegari.Shared;

public partial class Header : IDisposable
{
    [Inject] private IJSRuntime JS { get; set; } = default!;
    [Inject] private NavigationManager NavigationManager { get; set; } = default!;

    protected override async Task OnInitializedAsync()
    {
        NavigationManager.LocationChanged += OnLocationChanged;
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        await JS.InvokeVoidAsync("import", "../Shared/Header.razor.js");
        await ScrollToFragment();
    }

    public void Dispose()
    {
        NavigationManager.LocationChanged -= OnLocationChanged;
    }

    private async void OnLocationChanged(object sender, LocationChangedEventArgs e)
    {
        await ScrollToFragment();
    }

    private async Task ScrollToFragment()
    {
        var uri = new Uri(NavigationManager.Uri, UriKind.Absolute);
        var fragment = uri.Fragment;
        if (fragment.StartsWith('#'))
        {
            var elementId = fragment.Substring(1);
            var index = elementId.IndexOf(":~:", StringComparison.Ordinal);
            if (index > 0)
            {
                elementId = elementId.Substring(0, index);
            }

            if (!string.IsNullOrEmpty(elementId))
            {
                await JS.InvokeVoidAsync("BlazorScrollToId", elementId);
            }
        }
    }
}
