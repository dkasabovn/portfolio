export default function({route, redirect}) {
    if (route.fullPath === "/projects") {
        return redirect('/')
    }
}