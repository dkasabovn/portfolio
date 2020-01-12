<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <pre><code class="language-javascript">{{Resume}}</code></pre>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            "Resume": {
                "user": {
                    "name": "Daniel Kasabov-Nouvion",
                    "yob": "2002",
                    "ethnicity": "Russian",
                    "home": "Austin TX"
                },
                "Metrics": {
                    "moreComing": true,
                    "Academic": {
                        "Math": ["Algebra Two", "Pre-Calculus", "Calc AB", "Calc BC", "Multivariable", "Linear Algebra"],
                        "Computer Science": ["Computer Science 1", "AP Computer Science A", "Computer Science 3 HL", "Computer Science 4 HL"],
                        "Rank": "Top 11%",
                        "GPA": 3.975,
                        "School": "Vandegrift HS"
                    },
                    "Robotics": {
                        "Team": "6299 QuadX",
                        "Role": "Software Lead",
                        "Awards": ["Second Inspire Worlds", "First Inspire Regionals", "First Design Regionals"],
                        "Hours Spent": 570
                    },
                    "Computer Science": {
                        "USACO Rank": "Gold",
                        "GitHub": "https://github.com/dkasabovn",
                        "Languages": ["Javascript", "C++", "Java & Kotlin", "Python"],
                        "Frameworks": ["Nuxt.js", "Vue.js"]
                    }
                }
            }
        }
    },
    mounted() {
        Prism.highlightAll()
    }
}
</script>

<style scoped>

</style>