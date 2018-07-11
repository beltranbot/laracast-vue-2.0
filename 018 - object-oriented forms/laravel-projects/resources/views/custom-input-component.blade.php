<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Create Project</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.css">
    <style>body {padding-top: 40px;}</style>
</head>
<body>
    <div id="app" class="container">
        <coupon v-model="coupon" :code="coupon">
    </div>

    {{-- <script src="/js/app.js"></script> --}}
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
    <script src="/js/custom-input-components.js"></script>
</body>
</html>